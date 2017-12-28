export const ADD_POST = 'ADD_POST';

export function addPost({author, title, content}){
  return {
  	type: ADD_POST,
  	author,
  	title,
  	content,
  }
};