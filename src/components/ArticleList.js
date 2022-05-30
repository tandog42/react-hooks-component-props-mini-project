import React from "react";
import Article from "./Article";

function ArticleList(props) {
  const postElement = props.posts
  console.log(postElement)
  const comments = postElement.map(notes => {
    return (
      <Article
        key={notes}
        
        title={notes.title}
        date={notes.date}
        preview={notes.preview}
        minutes={notes.minutes}
      />
    )
  });
  return (
  <main>
    {comments}
  </main>
  )}

export default ArticleList;
