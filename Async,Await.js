myFirstAsync =() =>{
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve('success');
        }, 250);
    })
}
msg = async () => {
    const successMessage = await myFirstAsync();
    console.log('Yay !',successMessage)
}

msg();