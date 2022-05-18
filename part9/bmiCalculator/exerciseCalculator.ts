interface Results {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const calculateExercises = (target: number, dailyExercises: Array<number>,) : Results => {
    
    const periodLength = dailyExercises.length;
    const trainingDays = dailyExercises.filter(day => day > 0).length;
    const success = dailyExercises.every(day => day >= target);
    const average = dailyExercises.reduce((a, b) => a + b, 0) / periodLength;
    const rating = Math.round(average / target);
    const ratingDescription = rating < 1 ? 'You are not even trying!' : rating < 1.5 ? 'You can do better!' : rating < 2 ? 'Not bad!' : rating < 2.5 ? 'Good job!' : rating < 3 ? 'Great!' : rating < 3.5 ? 'Awesome!' : 'Unbelievable!';
    
    console.log({
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    })
    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };
};

const target = Number(process.argv[2])
const arguments: Array<number> = process.argv.slice(3).map(str => {
    return Number(str);
});

calculateExercises(target, arguments);