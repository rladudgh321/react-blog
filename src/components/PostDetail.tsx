export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">
            패스트캠퍼스
          </div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">홍길동</div>
            <div className="post__date">2024.02.09. 금요일</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">삭제</div>
            <div className="post__edit">수정</div>
          </div>
          <div className="post__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit omnis est deleniti officiis perferendis eius doloremque, tempora blanditiis adipisci nam dolorum architecto enim minus porro quam fugiat mollitia quibusdam.
          </div>
        </div>
      </div>
    </>
  );
}