import { Route, Routes, useNavigate } from "react-router-dom";
import BookingPage from "./BookingPage";
import {useReducer} from 'react';
import BookingForm from "./BookingForm";

function Main() {
   
    const seedRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        console.log("seedRandom just ran");
        return function () {
            return (s = s * a % m) / m;
        }
    };

    const fetchAPI = function (date) {
        let result = [];
        let random = seedRandom(date.getDate());
        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() <= 0.5) {
                result.push(i + ':30');
            }
        }
        console.log("fetchAPI just ran: " + result);
        return result;
    };
   
    //remove every other time from the array and return a new array
    // const randomizeTimes= (availableTimes)=> {
    //     let i = availableTimes.length;
    //     while (i--) (i + 1) % 2 === 0 && (availableTimes.splice(i, 1));
    
    //     return { state, availableTimes};
    //  };

    //   const availableTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
  
    const submitAPI = function (formData) {
        return true;
    };

    const initialState = { availableTimes: ["(Choose a Date First)"] };
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return { availableTimes: fetchAPI(new Date()) };
    };


    const navigate = useNavigate();

    function SubmitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    };

    return (
        <main>
            <Routes>
            <Route path='/' element={
                    <BookingPage>
                        <BookingForm availableTimes={state} dispatch={dispatch} SubmitForm={SubmitForm}/>
                    </BookingPage>
                }
                    ///gotta be a better way to pass these children props...
                />


                {/* <Route path='/' element={
                    <BookingPage availableTimes={state} dispatch={dispatch} SubmitForm={SubmitForm}/>
                }
                    ///gotta be a better way to pass these children props...
                /> */}
                {/* <Route path='/confirmed' element={
                    <ConfirmedBooking />
                }
                /> */}
            </Routes>
        </main>
        )
}

export default Main;