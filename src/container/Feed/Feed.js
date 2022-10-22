import React, { Component } from "react";
import techCrunchLog from '../../log'
import {debounce} from 'lodash';
import { connect } from "react-redux";

import Post from "../Post/Post";
import classes from "./feed.module.css";
import PuffLoader from "react-spinners/PuffLoader";



import axios from "axios";
import * as actionTypes from '../../store/actions'

class Feed extends Component {

  constructor(){
    super();
    this.infiniteScroll=this.infiniteScroll.bind(this)
  }
  
  state = {
    feedData: [],
    selectedPostURL:"",
    networkError:false
  };

  componentDidMount() {
    let feedType = this.getFeedType();
    this.props.onFeedTypeChange(feedType);
    this.getPostDataFromAPI(this.props.feedType);
    techCrunchLog("feed.js : component mounted");
    window.addEventListener('scroll', debounce(this.infiniteScroll,1500));
  }

  shouldComponentUpdate(prevProps, prevState) {
    var tempFeedType = this.props.match.path;
    if (prevProps.match.path !== tempFeedType || this.state.feedData.length === 0) {
      window.scrollTo(0, 0);
      this.props.onPageUpdate(1);
      return true;
    } else {

      if(prevState.feedData.length !== this.state.feedData.length){
        return true;
      }else{
        return false;
      }
      
    }
  }

  componentDidUpdate(prevProps, prevState) {
    techCrunchLog("feed.js component updated");
    var tempFeedType = this.props.match.path;
    if (prevProps.match.path !== tempFeedType) {
      tempFeedType = tempFeedType.split("/");
      this.props.onFeedTypeChange(tempFeedType[1]);
      this.props.onloadingContentChage(true);
      techCrunchLog("loading started : "+this.props.loadingContent)
      this.setState(
        {
          feedData: [],
          networkError:false
        },
        () => {
          this.getPostDataFromAPI(this.props.feedType);
        }
      );
    }
  }

  getPostDataFromAPI(src) {
    axios
      .get("https://damp-island-46703.herokuapp.com/?src=" + src + "&page="+this.props.page)
      .then((response) => {
        this.props.onloadingContentChage(false);
        this.setState({
          feedData: [...this.state.feedData ,...response.data]
        });
        techCrunchLog("loading complete : "+this.props.loadingContent)
      }).catch(err=>{
        this.setState({
          networkError:true
        })
        // console.log("network error ",err)
      });
  }

  selectedPostHandler(url) {
    this.setState(
      {
        selectedPostURL: url,
      },
      () => {
        techCrunchLog("feed.js : "+this.state.selectedPostURL);
      }
    );
  }

  infiniteScroll(){
    // End of the document reached?
    // console.log("scrolling...")
    if (document.documentElement.scrollTop >= (document.documentElement.offsetHeight*0.6)){
      // console.log("reached down")
      this.props.onPageUpdate(this.props.page+1)
      this.getPostDataFromAPI(this.props.feedType);
    }
  }

  getFeedType() {
    var tempFeedType = this.props.match.path;
    tempFeedType = tempFeedType.split("/");
    return tempFeedType[1];
  }

  render() {
    const posts = this.state.networkError ?  "Network error please try again later" : this.state.feedData.map((post) => {
      return (
        <Post clicked={() => {this.selectedPostHandler(post.post_links);}} key={post.post_links} postdata={post}/>
      );
    });

    
    return (
      <div className={classes.feedContainer}>
        {posts}
        <PuffLoader
          size={150}
          color={"#36D7B7"}
          loading={this.state.networkError ? false : true}
        />
      </div>
      
      )
  }
}

const mapStateToProps = (state) => {
  return {
    feedType: state.feedType,
    page: state.page,
    loadingContent: state.loadingContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFeedTypeChange: (feedType) => dispatch({ type: actionTypes.CHANGE_FEED_TYPE, payload: { type: feedType } }),
    onloadingContentChage: (loadingContent) => dispatch({type: actionTypes.LOADING_CONTENT,payload:{ loadingContent: loadingContent}}),
    onPageUpdate:(pageNumber) => dispatch({type: actionTypes.PAGE_UPDATE,payload: {page:pageNumber}})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
