const activities_list = [ \cb1 \
\cb3     "Watching", \cb1 \ \\ Can be Watching or Listening
\cb3     \'93WHAT YOU WANT THE STATUS TO SAY\'94\cb1 \
\cb3     ]; // creates an arraylist containing phrases you want your bot to switch through.\cb1 \
\
\cb3 client.on('ready', () => \{\cb1 \
\cb3     setInterval(() => \{\cb1 \
\cb3         const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).\cb1 \
\cb3         client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.\cb1 \
\cb3     \}, 10000); // Runs this every 10 seconds.\cb1 \
\cb3 \});\cb1 \
}
