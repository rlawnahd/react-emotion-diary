const DiaryList = ({ diaryList }) => {
  return (
    <div>
      {diaryList.map((it) => {
        return <div key={it.id}>{it.content}</div>;
      })}
    </div>
  );
};

export default DiaryList;
