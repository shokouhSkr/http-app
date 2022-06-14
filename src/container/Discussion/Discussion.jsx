import Comment from "../../components/Comment";
import FullComment from "../../components/FullComment";
import NewComment from "../../components/NewComment";

const Discussion = () => {
  return (
    <div>
      <main>
        <section className="flex justify-between">
          <Comment />
          <Comment />
          <Comment />
        </section>
        <section>
          <FullComment />
        </section>
        <section>
          <NewComment />
        </section>
      </main>
    </div>
  );
};

export default Discussion;
