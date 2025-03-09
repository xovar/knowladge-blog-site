import Bookmark from "../Bookmark/Bookmark";

export default function Bookmarks({bookmark}) {
  return (
    <>
      <div className='ml-[30px]'>
        <h1 className='text-[24px] font-bold'>Bookmarked Blogs : {bookmark.length < 1 ? 0 : bookmark.length}</h1>
      </div>

      {bookmark?.map(bookmark => <Bookmark bookmark={bookmark} key={bookmark.id}/>)}
    </>
  );
}
