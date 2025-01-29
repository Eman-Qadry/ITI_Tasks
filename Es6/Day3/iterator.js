const myObject = {
    name: "eman",
    age: 24,
    job: "Backend Developer",
    country: "Egypt",

  
};

myObject[Symbol.iterator]= function() {
    const entries = Object.entries(this); 
    let i = 0;

    return {
        next: () => {
            if (i< entries.length) {
                const [key, value] = entries[i++];
                return { value: `${key}: ${value}`, done: false };
            }
            return { done: true };
        }
    };
}



for (const property of myObject) {
    console.log(property);
}


