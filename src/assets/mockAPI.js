// I got this from https://drive.google.com/file/d/1PMLIeT_CGv6oGL7WoXa-ubgcSspRfyBL/view since the link to the API from Coursera was a 404

const availableTimesByDate = {
  //I should change this to instead of the month and year, just the day of the month. then it would work into the future if i host it online
    '1': ['8:00', '9:00', '10:00'],
    '2': ['5:00', '6:00', '7:00'],
    '3': ['8:00', '9:00', '10:00'],
    '4': ['5:00', '6:00', '7:00'],
    '5': ['8:00', '9:00', '10:00'],
    '6': ['5:00', '6:00', '7:00'],
    '7': ['8:00', '9:00', '10:00'],
    '8': ['5:00', '6:00', '7:00'],
    '9': ['8:00', '9:00', '10:00'],
    '10': ['5:00', '6:00', '7:00'],
    '11': ['8:00', '9:00', '10:00'],
    '12': ['5:00', '6:00', '7:00'],
    '13': ['8:00', '9:00', '10:00'],
    '14': ['5:00', '6:00', '7:00'],
    '15': ['8:00', '9:00', '10:00'],
    '16': ['5:00', '6:00', '7:00'],
    '17': ['8:00', '9:00', '10:00'],
    '18': ['5:00', '6:00', '7:00'],
    '19': ['8:00', '9:00', '10:00'],
    '20': ['5:00', '6:00', '7:00'],
    '21': ['8:00', '9:00', '10:00'],
    '22': ['5:00', '6:00', '7:00'],
    '23': ['8:00', '9:00', '10:00'],
    '24': ['5:00', '6:00', '7:00'],
    '25': ['8:00', '9:00', '10:00'],
    '26': ['5:00', '6:00', '7:00'],
    '27': ['8:00', '9:00', '10:00'],
    '28': ['5:00', '6:00', '7:00'],
    '29': ['8:00', '9:00', '10:00'],
    '30': ['5:00', '6:00', '7:00'],
    '31': ['8:00', '9:00', '10:00'],
  };


const fetchAPI = (formData) => {
  // const dayOfMonth = formData.date.getDate();
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[formData.date]){
                resolve(availableTimesByDate[formData.date])
            }
            else{
                reject(new Error('No available times for the selected date.'));
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {
    // const dayOfMonth = formData.date.getDate();
    availableTimesByDate[formData] = availableTimesByDate[formData].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

export { fetchAPI, submitAPI };