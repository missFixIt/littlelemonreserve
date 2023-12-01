import { Route, Routes, useNavigate } from "react-router-dom";
import BookingPage from "./BookingPage";
import {useReducer} from 'react';
import BookingForm from "./BookingForm";
// import { fetchAPI, submitAPI } from "../assets/mockAPI";
///note to my peer reviewers. I named this component "Reservations" instead of "Main" like they mentioned doing in the course. It seemed to be more logical for the way my site is set up.
function Reservations() {
   
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
        return result;
    };
   
    const submitAPI = function (formData) {
        return true;
    };

    const initialState = { availableTimes: fetchAPI(new Date()) };
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
                        <BookingForm availableTimes={state} dispatch={dispatch} SubmitForm={SubmitForm} />
                    </BookingPage>
                }
                ></Route>
            </Routes>
        </main>
    );
};

export default Reservations;