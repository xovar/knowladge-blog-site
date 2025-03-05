import profile from '../../assets/images/profile.png';

export default function Header() {
  return (
    <div className='flex justify-between items-center'>
       <h1 className='text-[40px] not-italic font-bold'>Knowledge Cafe</h1>
       <img src={profile} alt="" />
    </div>
  );
}
