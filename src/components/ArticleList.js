import Article from "./Article";

function ArticleList({posts}) {
    // postsBlog.map((singlePost) => console.log(singlePost))
    return (
        <main>
            {posts.map((post, id) => <Article key={id} title={post.title} date={post.date} preview={post.preview} />)}
        </main>
    )
}

export default ArticleList;