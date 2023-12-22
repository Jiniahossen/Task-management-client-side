import { CiLock } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CiFacebook } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { imageUpload } from "../../hooks/useImage";
import Swal from 'sweetalert2';
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
    const {signInWithGoogle, createUser, updateUserProfile }=useAuth();
    const axiosPublic=useAxiosPublic();
    const navigate = useNavigate();
  
    const handleSignUp = async (e) => {
  
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const image = form.image.files[0];
  
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Image:", image);
      const imageData = await imageUpload(image);
  
      createUser(email, password)
        .then(res => {
          const user = res.user;
          console.log(user);
          updateUserProfile(name, imageData?.data?.display_url)
            .then(() => {
              const userInfo = {
                name: user.displayName,
                email: user.email,
                profile:user?.photoURL,
  
              }
              console.log(userInfo);
              axiosPublic.post('/users', userInfo)
                .then((res) => {
                  if (res.data.insertedId) {
                    Swal.fire("Account create successfully");
                    navigate('/dashboard')
                  }
                })
            })
        })
        .catch(error => {
          console.log(error);
          Swal.fire(`${error}`);
        });
  
    };

    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(res=>{
            console.log(res.data);
         const userInfo={
             email:res.user.email,
             name:res.user.displayName,
             photo:res.data.photoURL
         }
 
         axiosPublic.post('/users',userInfo)
 
         .then((res)=>{
             console.log(res.data);
                 Swal.fire('Hola you are here!')
                 navigate('/dashboard')
             
         })
        }
        )
        .catch(error=>{
         console.log('Error is :--',error);
        })
 
     };


    return (
        <div>
            <div className="bg-cover min-h-screen p-6 pb-10 mt-10" style={{ backgroundImage: `url(https://i.ibb.co/9Y1SFyT/yellow-sports-shoe-with-elegant-design-generated-by-ai.jpg)` }}>
                <div className="max-w-5xl mx-auto backdrop-blur-sm bg-white/30 items-center text-center p-6 md:p-20 mt-10">
                    <h1 className="text-2xl md:text-4xl font-serif font-bold mb-2 text-black">Create an Account</h1>
                    <p className="text-sm font-serif mb-6 text-black">Stay with FoodGarden</p>
                    <form className="max-w-sm mx-auto" onSubmit={handleSignUp}>
                        <div className="relative mb-4">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <FaRegUserCircle className="text-xl"></FaRegUserCircle>
                            </div>
                            <input type="test"  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-black  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user Name" name="name" />
                        </div>
                        <div className="relative mb-4">
                        <label className="block text-start font-serif text-black mb-2 text-base font-medium  dark:text-black" htmlFor="multiple_files">Upload Image:</label>
                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" required name="image" />
                        </div>
                        <div className="relative mb-4">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <MdOutlineMail className="text-xl"></MdOutlineMail>
                            </div>
                            <input type="email" id="email-address-icon" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-black  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" name="email" />
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <CiLock className="text-xl"></CiLock>

                            </div>
                            <input type="password" id="password-icon" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" name="password" />
                        </div>
                        <button type="submit" className="text-white bg-[#67deae] hover:bg-[#67deae] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full mt-6 font-serif me-2 mb-2 ">Sign up</button>
                    </form>
                    <div className="mt-">
                        <h1 className="text-base font-serif">Already have an account? <Link to={'/login'}>
                            <span className="text-base font-serif text-blue-700">Login</span>
                        </Link>
                        </h1>
                    </div>
                    <div>
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-72 h-px my-8 bg-gray-200  border-0 dark:bg-gray-700"></hr>
                            <span className="absolute px-3 font-medium text-black -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 text-lg font-serif">or continue with</span>
                        </div>
                        <div>
                            <div>
                                <div className="flex justify-center items-center gap-2 md:gap-4">
                                    <button type="button" className="py-2 px-4 md:px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={handleGoogleSignIn}>

                                        <div className="flex items-center gap-2 text-lg font-serif" >
                                            <h1>Google</h1>
                                            <FcGoogle className="text-2xl"></FcGoogle>
                                        </div>
                                    </button>
                                    <button type="button" className="py-2 px-4 md:px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">

                                        <div className="flex items-center gap-2 text-lg font-serif">
                                            <h1>Facebook</h1>
                                            <CiFacebook className="text-2xl text-blue-700"></CiFacebook>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;