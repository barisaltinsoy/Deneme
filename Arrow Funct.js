function hello(firstName){
  console.log(`Merhaba ${firstName}`)
}
hello("Baris")

const helloFuncV1 = (firstName) => {console.log(`Merhaba ${firstName}`)}
helloFuncV1("Baris helloFuncV1")

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)
helloFuncV2("Baris helloFuncV2")

const helloFuncV3 = (firstName, lastName) => console.log(`Merhaba ${firstName} ${lastName}`)
helloFuncV3("Baris helloFuncV3", "ALTINSOY")

const helloFuncV4 = (firstName, lastName) =>{ 
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}

helloFuncV4("Baris helloFuncV4", "ALTINSOY")