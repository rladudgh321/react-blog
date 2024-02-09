import { Link } from "react-router-dom"

interface PostListProps{
  hasNavigation?: boolean;
}

export default function PostList({hasNavigation = true}: PostListProps) {
  return (
    <>
      { hasNavigation && <div className="post__navigation">
        <div className="post__navigation--active">전체글</div>
        <div>나의 글</div>
      </div>}
      <div className="post__list">
        {[...Array(10)].map((v,i) => {
          return (<div key={i+1} className="post__box">
            <Link to={`/posts/${i+1}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">홍길동</div>
                <div className="post__date">2024.02.09. 금요일</div>
              </div>
              <div className="post__title">게시글 {i+1}</div>
              <div className="post__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                
              </div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </div>)
        })}
      </div>
    </>
  )
}