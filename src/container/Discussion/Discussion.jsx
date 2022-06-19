import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "../../components/Comment";
import FullComment from "../../components/FullComment";
import NewComment from "../../components/NewComment";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);

  // 2xx : ok
  // 301, 302 => redirect(SEO)
  // 4xx : 401 => unAuthorized, 402, 403 => non Access, 404 => not found (frontend)
  // 5xx : server(backend)

  // 1. this is how we access to database (by then-catch)
  // ***************************************************
  // useEffect(() => {
  //   const promis = axios
  //     .get("https://jsonplaceholder.typicode.com/comments")
  //     .then((response) => {
  //       // console.log(response);
  //       // console.log(response.data);
  //       // setComments(response.data);
  //       setComments(response.data.slice(0, 4));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   // console.log(promis);
  // }, []);

  // 2. another way to access to database (by Async-Await)
  // *****************************************************
  // useEffect(() => {
  //   getComments();
  // }, []);

  // async function getComments() {
  //   // we always use try-catch for async-await
  //   try {
  //     const { data } = await axios.get("https://jsonplaceholder.typicode.com/comments");
  //     // console.log(response);
  //     setComments(data.slice(0, 4));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // 3. same above but in an arrow function (by Async-Await)
  // *******************************************************
  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/comments/");
        // console.log(response);
        setComments(data.slice(0, 4));
      } catch (error) {
        // console.log(error);
        setError(true);
      }
    };
    getComments();
  }, []);

  const selectCommentHandler = (id) => {
    // console.log(id);
    setSelectedId(id);
  };

  const renderComments = () => {
    // loading, comments, or error ?!
    let renderValue = <p>Loading...</p>;

    if (error) renderValue = <p>fetching data failed!</p>;

    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Comment
          key={c.id}
          name={c.name}
          email={c.email}
          body={c.body}
          onClick={() => selectCommentHandler(c.id)}
        />
      ));
    }

    return renderValue;
  };

  return (
    <div>
      <main>
        <section className="flex justify-between gap-x-2 overflow-auto">{renderComments()}</section>
        <section>
          <FullComment commentId={selectedId} />
        </section>
        <section>
          <NewComment />
        </section>
      </main>
    </div>
  );
};

export default Discussion;
