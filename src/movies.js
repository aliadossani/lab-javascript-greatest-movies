// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((moviesElement) => {
        return moviesElement.director;
    });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMovies = moviesArray.filter((moviesElement) => {
        return moviesElement.genre.includes("Drama") && moviesElement.director === "Steven Spielberg";
    });
    return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0;
    }
    const sumScores = moviesArray.reduce((accumulator, moviesElement) => {
        if (moviesElement.score) {
            return accumulator + moviesElement.score;
        }
        return accumulator + 0;
    }, 0);
    const averageScore = (sumScores / moviesArray.length);
    return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (!moviesArray.length) {
        return 0;
    }
    const dramaMovies = moviesArray.filter((moviesElement) => {
        return moviesElement.genre.includes("Drama");
    });
    if (!dramaMovies.length) {
        return 0;
    }
    const sumDrama = dramaMovies.reduce((accumulator, moviesElement) => {
        if (moviesElement.score) {
            return accumulator + moviesElement.score;
        }
        return accumulator + 0;
    }, 0);
    const averageScore = (sumDrama / dramaMovies.length);

    return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const sortedArray = moviesArray.toSorted((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        }
        return a.title.localeCompare(b.title);
    });
    return sortedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const sortedMovies = moviesArray.toSorted((a, b) => {
        return a.title.localeCompare(b.title);
    });

    const first20Movies = sortedMovies.slice(0, 20);

    return first20Movies.map((movieElement) => {
        return movieElement.title;
    })

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
