import axios from "axios";

const API_BASE_URL = "api/v1/posts";

class ApiService {

  getPost(){
      return axios.get(API_BASE_URL);
  }

  getPostById(postId){
      return axios.get(API_BASE_URL + '/' + postId);
  }

  createPost(post){
    return axios.post(API_BASE_URL, post);
  }

  updatePost(post, postId){
      return axios.put(API_BASE_URL + '/' + postId, post);
  }

  deletePost(postId){
      return axios.delete(API_BASE_URL + '/' + postId);
  }
  
}

export default new ApiService()