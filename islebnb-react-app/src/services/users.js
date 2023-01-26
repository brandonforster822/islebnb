export const getUserByEmail = async (email) =>{
    const emailVal = (Object.values(email)[0])
    const res = await fetch(`/api/users/email/${emailVal}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json();
    return data
}