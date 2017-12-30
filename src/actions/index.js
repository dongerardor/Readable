export const ADD_POST = 'ADD_POST';
export const ADD_USER = 'ADD_USER';

export function addPost({author, title, content}){
  return {
  	type: ADD_POST,
  	author,
  	title,
  	content,
  }
};


export function addUser({name}){
	return {
		type: ADD_USER,
		name
	}
}