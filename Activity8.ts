/*

Define a type Profile with username (string), bio (string or null), and optionalavatarUrl (string).
Create two profiles: one with a null bio and no avatar, and one with both fields set.
Write a function showProfile that prints the username, a default message if bio is null, and a default avatar if avatarUrl is undefined.

*/

type Profile ={
    username:string;
    bio : string | null;
    avatarUrl?: string;
}

const profile1: Profile = {
    username: "Poda",
    bio: null,
    avatarUrl: undefined    
}
const profile2: Profile = {
    username: "Mounitha",
    bio: "This is a sample bio.",
    avatarUrl: "https://example.com/avatar.jpg"
}
function showProfile(profile: Profile): void {
    console.log("Username:", profile.username);
    console.log("Bio:", profile.bio ?? "No bio available");
    console.log("Avatar URL:", profile.avatarUrl ?? "No avatar available");
}

// Call the function to show the profiles
showProfile(profile1);
showProfile(profile2);
