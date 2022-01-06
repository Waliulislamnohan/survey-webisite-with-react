import Videos from "../Videos";
import { useAuth } from "../../contexts/AuthContext";
export default function Home() {
  const { currentUser} = useAuth();
  return (
     <>
     <div>
       <h3> Welcome to Do Survey {currentUser ? ( <span>{currentUser.displayName}</span>  ) : (<span>User</span> )},</h3>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
scrambled it to make a type specimen book. It has survived not only five centuries, but also the
Only pre-authorized user can register, please use your contact email to create account
PLEASE NOTE, only pre-authorized, registererd users can access the survey
      </p>       
     </div>

     <Videos />
   </>
  );

}
