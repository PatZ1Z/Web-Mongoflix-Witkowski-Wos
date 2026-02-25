db = db.getSiblingDB("Mongoflix")
// Zapytanie pierwsze, filtorwanie po gatunku


let wynik1 = db.movies.aggregate([
    {
        $unwind:
        /**
         * path: Path to the array field.
         * includeArrayIndex: Optional name for index.
         * preserveNullAndEmptyArrays: Optional
         *   toggle to unwind null and empty values.
         */
            {
                path: "$genres"
            }
    },
    {
        $match:
        /**
         * query: The query in MQL.
         */
            {
                genres: "Akcja"
            }
    }
]).toArray()
print(wynik1);

// Zapytanie drugie, średnia ocena filmów po roku

    let wynik2 = db.movies.aggregate([
        {
            $unwind:
            /**
             * path: Path to the array field.
             * includeArrayIndex: Optional name for index.
             * preserveNullAndEmptyArrays: Optional
             *   toggle to unwind null and empty values.
             */
                {
                    path: "$reviews"
                }
        },
        {
            $match:
            /**
             * query: The query in MQL.
             */
                {
                    year: {
                        $gt: 1999
                    }
                }
        },
        {
            $group:
            /**
             * _id: The id of the group.
             * fieldN: The first field name.
             */
                {
                    _id: {
                        title: "$title",
                        year: "$year"
                    },
                    Avg: {
                        $avg: "$reviews.rating"
                    }
                }
        }
    ]).toArray()
print(wynik2);


// zapytanie trzecie, średnia ocena po gatunku

let wynik3 = db.movies.aggregate([
    {
        $unwind:
        /**
         * path: Path to the array field.
         * includeArrayIndex: Optional name for index.
         * preserveNullAndEmptyArrays: Optional
         *   toggle to unwind null and empty values.
         */
            {
                path: "$genres"
            }
    },
    {
        $unwind:
        /**
         * path: Path to the array field.
         * includeArrayIndex: Optional name for index.
         * preserveNullAndEmptyArrays: Optional
         *   toggle to unwind null and empty values.
         */
            {
                path: "$reviews"
            }
    },
    {
        $group:
        /**
         * _id: The id of the group.
         * fieldN: The first field name.
         */
            {
                _id: {
                    genre: "$genres"
                },
                Avg: {
                    $avg: "$reviews.rating"
                }
            }
    }
]).toArray()
print(wynik3);


// Zapytanie czwarte, dodanie recenzji
//
//     db.movies.updateOne(
//         { title: "Avatar" },
//         {
//             $push: {
//                 reviews: {
//                     user: "nowy_user",
//                     rating: 9,
//                     comment: "Jeszcze lepszy za drugim razem!"
//                 }
//             }
//         }
//     )

