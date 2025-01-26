import CardPost from "@/components/molecules/CardPost";
import ChatNow from "@/components/molecules/ChatNow";
import TrendingPost from "@/components/molecules/TrendingPost";
import articles from "@/data/articles.json"; // Impor file JSON

export default function Articles() {
  return (
    <>
      <div className="content-inner">
        <div className="container w-[1000px] h-[1250px] mx-[405px]">
          <div className="main-container">
            {/* <!-- chat now --> */}
            <ChatNow />

            {/* <!-- trending article --> */}
            <TrendingPost />

            {/* menampilkan artikel */}
            {articles.map((articleData) => (
              <CardPost
                key={articleData.id}
                title={articleData.title}
                intro={articleData.intro}
                img={articleData.img}
                imgAlt={articleData.imgAlt}
                tag={articleData.tag}
                classNameTag={articleData.classNameTag}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
