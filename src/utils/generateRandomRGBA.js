export default function generateRandomRGBA() {
    const red = Math.floor((Math.random() * 255) + 0);
    const green = Math.floor((Math.random() * 255) + 0);
    const blue = Math.floor((Math.random() * 255) + 0);

    return { 
        borderColor: `rgba(${red}, ${green}, ${blue}, 1)`,
        backgroundColor: `rgba(${red}, ${green}, ${blue}, 0.2)`,
    };
}