const makeFakeRequest = () => {
    return new promise((resolve, reject) => {
        setTimeout(() => {
            const randNum = Math.random();
            if(randNum > .5) resolve ({ data: 'lol', status: 200});
            reject({status: 404, data: 'No dice'});

        }, 1000)
    })
}