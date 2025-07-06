
// use your own github api token to use this web app
const Token="";

export async function fetchUserData(username) {
    if(username.trim() === '') {
        return { items: [] }; // Return an empty array if the username is empty
    }
 
    const response = await fetch(`https://api.github.com/search/users?q=${username}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
                  Authorization:Token ? `Bearer ${Token}` : ''
            }
        }
    );
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data;
    
}


export async function fetchrepos() {
    
    
    const response = await fetch(`https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&per_page=10`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
                  Authorization:Token ? `Bearer ${Token}` : ''
            }
        }
    );
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data;
    
} 


export const fetchuserrepos=async(username)=>{

   const response = await fetch(`https://api.github.com/users/${username}/repos`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
                  Authorization:Token ? `Bearer ${Token}` : ''
            }
        }
    );
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data;

}

export const fetchuser=async(username)=>{

   const response = await fetch(`https://api.github.com/users/${username}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
                  Authorization:Token ? `Bearer ${Token}` : ''
            }
        }
    );
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data;
}


export  const fetchfollower=async(url)=>{
     const response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
                  Authorization:Token ? `Bearer ${Token}` : ''
            }
        }
    );
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data;
}


export const fetchstarredrepo=async(username)=>{
    const response = await fetch(`https://api.github.com/users/${username}/starred`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
                  Authorization:Token ? `Bearer ${Token}` : ''
            }
        }
    );
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data;
}

export const fetchtopuser=async()=>{

      const response = await fetch(`https://api.github.com/search/users?q=followers:%3E1000&sort=followers&order=desc`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
                  Authorization:Token ? `Bearer ${Token}` : ''
            }
        }
    );
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data;
    
}
export const fetchtoporganization=async()=>{

      const response = await fetch(`https://api.github.com/search/users?q=type:org&per_page=10`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
                  Authorization:Token ? `Bearer ${Token}` : ''
            }
        }
    );
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data;
    
}
