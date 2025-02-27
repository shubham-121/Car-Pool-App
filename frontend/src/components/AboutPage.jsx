// function App() {
//   const [value, setValue] = useState("");

//   const apikey = import.meta.env.VITE_API_KEY;

//   console.log(apikey);

//   useEffect(() => {
//     async function getData() {
//       const res = await fetch(`${import.meta.env.VITE_BASE_URL}/`);

//       const data = await res.json();

//       setValue(data.message);
//     }
//     getData();
//   }, []);
//   return (
//     <div className="bg-orange-400">
//       <p>{value}</p>
//     </div>
//   );
// }
