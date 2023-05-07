import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserContainer = ({ FetchUsers }) => {
  const dispatch = useDispatch();
  const datas = useSelector(state => state.user);
  const { loading, users, err } = datas;
  console.log("users", err);
  useEffect(() => {
    dispatch(FetchUsers());
  }, []);
  return (
    <div>
      <h1>User list</h1>
      {loading ? (
        <h2>Loading ...</h2>
      ) : (
        <div>
          <h4>
            {users.map(data => (
              <div key={data.id}>{data?.name}</div>
            ))}
          </h4>
          <span>{err && err}</span>
        </div>
      )}
    </div>
  );
};

export default UserContainer;
