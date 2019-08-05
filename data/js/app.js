var app = angular.module("movieApp", ["ngRoute"]);
app.config(function ($routeProvider, ) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/popular.html",
            controller: "popular"
        })
        .when("/topRated", {
            templateUrl: "pages/top-rated.html",
            controller: "topRated"
        })
        .when("/upcoming", {
            templateUrl: "pages/upcoming.html",
            controller: "upcoming"
        })
        .when("/genres/:name,:id", {
            templateUrl: "pages/genres.html",
            controller: "genres"
        })
        .when("/search/:query", {
            templateUrl: "pages/search.html",
            controller: "search"
        })
        .when("/details/:id", {
            templateUrl: "pages/details.html",
            controller: "details"
        })
        .when("/person/:id", {
            templateUrl: "pages/person.html",
            controller: "person"
        })
        .otherwise({
            templateUrl: "pages/popular.html",
            controller: "popular"
        });
});

app.component('navbar', {
    templateUrl: 'pages/navbar.html',
    controller: 'navbar'
});
app.controller("navbar", function ($scope, $http) {
    $http({
        method: "GET",
        url: 'https://api.themoviedb.org/3/genre/movie/list?api_key=a4942ba2bb35ba2f7205bedb5a8989bc'
    }).then(function mySuccess(response) {
        $scope.genres = response.data.genres;
    }, function myError(response) {
        $scope.genres = response.statusText;
    });
});



app.controller("popular", function ($scope, $http) {
    $scope.pages = 1;

    $http({
        method: "GET",
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&page=' + $scope.pages
    }).then(function mySuccess(response) {
        $scope.items = response.data.results;


    }, function myError(response) {
        $scope.items = response.statusText;
    });
    $scope.pagesInc = function () {
        $http({
            method: "GET",
            url: 'https://api.themoviedb.org/3/movie/popular?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&page=' + ++$scope.pages
        }).then(function mySuccess(response) {
            $scope.items = response.data.results;

        }, function myError(response) {
            $scope.items = response.statusText;
        });
    };
    $scope.pagesDec = function () {
        $http({
            method: "GET",
            url: 'https://api.themoviedb.org/3/movie/popular?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&page=' + --$scope.pages
        }).then(function mySuccess(response) {
            $scope.items = response.data.results;

        }, function myError(response) {
            $scope.items = response.statusText;
        });
    };
});

app.controller("topRated", function ($scope, $http) {
    $scope.pages = 1;
    $http({
        method: "GET",
        url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&page=' + $scope.pages
    }).then(function mySuccess(response) {
        $scope.topRated = response.data.results;
    }, function myError(response) {
        $scope.topRated = response.statusText;
    });
    $scope.pagesInc = function () {
        $http({
            method: "GET",
            url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&page=' + ++$scope.pages
        }).then(function mySuccess(response) {
            $scope.topRated = response.data.results;

        }, function myError(response) {
            $scope.topRated = response.statusText;
        });
    };
    $scope.pagesDec = function () {
        $http({
            method: "GET",
            url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&page=' + --$scope.pages
        }).then(function mySuccess(response) {
            $scope.topRated = response.data.results;

        }, function myError(response) {
            $scope.topRated = response.statusText;
        });
    };
});

app.controller("upcoming", function ($scope, $http) {
    $scope.pages = 1;
    $http({
        method: "GET",
        url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&page=' + $scope.pages
    }).then(function mySuccess(response) {
        $scope.upcoming = response.data.results;
    }, function myError(response) {
        $scope.upcoming = response.statusText;
    });
    $scope.pagesInc = function () {
        $http({
            method: "GET",
            url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&page=' + ++$scope.pages
        }).then(function mySuccess(response) {
            $scope.upcoming = response.data.results;

        }, function myError(response) {
            $scope.upcoming = response.statusText;
        });
    };
    $scope.pagesDec = function () {
        $http({
            method: "GET",
            url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&page=' + --$scope.pages
        }).then(function mySuccess(response) {
            $scope.upcoming = response.data.results;

        }, function myError(response) {
            $scope.upcoming = response.statusText;
        });
    };
});

app.controller("details", function ($scope, $routeParams, $http) {
    $scope.id = $routeParams.id;
    $http({
        method: "GET",
        url: 'https://api.themoviedb.org/3/movie/' + $scope.id + '/casts?api_key=a4942ba2bb35ba2f7205bedb5a8989bc'
    }).then(function mySuccess(response) {
        $scope.cast = response.data.cast;
    }, function myError(response) {
        $scope.cast = response.statusText;
    });
    $http({
        method: "GET",
        url: 'https://api.themoviedb.org/3/movie/' + $scope.id + '/external_ids?api_key=a4942ba2bb35ba2f7205bedb5a8989bc'
    }).then(function mySuccess(response) {
        $scope.external_id = response.data.imdb_id;
    }, function myError(response) {
        $scope.cast = response.statusText;
    });

    $http({
        method: "GET",
        url: 'https://api.themoviedb.org/3/movie/' + $scope.id + '?api_key=a4942ba2bb35ba2f7205bedb5a8989bc'
    }).then(function mySuccess(response) {
        $scope.data = response.data;

        var hellopreloader = document.getElementById("hellopreloader");
        function fadeOutnojquery(el) {
            el.style.opacity = 1;
            var interhellopreloader = setInterval(function () {
                el.style.opacity = el.style.opacity - 0.05;
                if (el.style.opacity <= 0.05) {
                    clearInterval(interhellopreloader);
                    hellopreloader.style.display = "none";
                }
            }, 16);
        }

        angular.element(window).ready(function () {
            setTimeout(function () {
                fadeOutnojquery(hellopreloader);
            }, 100);
        });

        document.getElementById("stars").innerHTML = getStars($scope.data.vote_average);
        $scope.release_year = $scope.data.release_date.slice(0, 4);
        function getStars(rating) {
            // Round to nearest half
            rating = Math.round(rating / 2);
            let output = [];
            // Append all the filled whole stars
            for (var i = rating; i >= 1; i--)
                output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');
            // // If there is a half a star, append it
            if (i === .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');
            // Fill the empty stars
            for (var i = (5 - rating); i >= 1; i--)
                output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');
            return output.join('');
        }

    }, function myError(response) {
        $scope.data = response.statusText;
    });

    $http({
        method: "GET",
        url: 'https://api.themoviedb.org/3/movie/' + $scope.id + '/similar?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&page=1'
    }).then(function mySuccess(response) {
        $scope.similar = response.data.results;
    }, function myError(response) {
        $scope.similar = response.statusText;
    });

    $http({
        method: "GET",
        url: 'https://api.themoviedb.org/3/movie/' + $scope.id + '/videos?api_key=a4942ba2bb35ba2f7205bedb5a8989bc'
    }).then(function mySuccess(response) {
        $scope.key = response.data.results[0].key;
        $scope.youtube_link = 'https://www.youtube.com/watch?v=' + $scope.key;
        console.log($scope.key);
    }, function myError(response) {
        $scope.key = response.statusText;
    });
});




app.controller("main", function ($scope, $location) {

})

app.directive('trackActive', function ($location) {
    function link(scope, element, attrs) {
        scope.$watch(function () {
            return $location.path();
        }, function () {
            var links = element.find('a');
            links.removeClass('active');
            angular.forEach(links, function (value) {
                var a = angular.element(value);
                if (a.attr('href') == '#!' + $location.path()) {
                    a.addClass('active');
                }
            });
        });
    }
    return { link: link };
});

app.controller("genres", function ($scope, $routeParams, $http) {
    $scope.model = {
        genreId: $routeParams.id,
        name: $routeParams.name
    }
    $scope.pages = 1;
    $http({
        method: "GET",
        url: 'https://api.themoviedb.org/3/discover/movie?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&with_genres=' + $scope.model.genreId
    }).then(function mySuccess(response) {
        $scope.genres = response.data.results;
    }, function myError(response) {
        $scope.genres = response.statusText;
    });
    $scope.pagesInc = function () {
        $http({
            method: "GET",
            url: 'https://api.themoviedb.org/3/discover/movie?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&with_genres=' + $scope.model.genreId + '&page=' + ++$scope.pages
        }).then(function mySuccess(response) {
            $scope.genres = response.data.results;
            // 
        }, function myError(response) {
            $scope.genres = response.statusText;
        });
    };
    $scope.pagesDec = function () {
        $http({
            method: "GET",
            url: 'https://api.themoviedb.org/3/discover/movie?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&with_genres=' + $scope.model.genreId + '&page=' + --$scope.pages
        }).then(function mySuccess(response) {
            $scope.genres = response.data.results;
            // 
        }, function myError(response) {
            $scope.genres = response.statusText;
        });
    };
});


app.controller("search", function ($scope, $routeParams, $http) {
    $scope.model = {
        query: $routeParams.query,
    }
    $scope.pages = 1;
    $http({
        method: "GET",
        url: 'https://api.themoviedb.org/3/search/movie?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&query=' + $scope.model.query
    }).then(function mySuccess(response) {
        $scope.search = response.data.results;
        $scope.total_pages = response.data.total_pages;

    }, function myError(response) {
        $scope.search = response.statusText;
    });
    $scope.pagesInc = function () {
        $http({
            method: "GET",
            url: 'https://api.themoviedb.org/3/search/movie?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&query=' + $scope.model.query + '&page=' + ++$scope.pages
        }).then(function mySuccess(response) {
            $scope.search = response.data.results;

        }, function myError(response) {
            $scope.search = response.statusText;
        });
    };
    $scope.pagesDec = function () {
        $http({
            method: "GET",
            url: 'https://api.themoviedb.org/3/search/movie?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&query=' + $scope.model.query + '&page=' + --$scope.pages
        }).then(function mySuccess(response) {
            $scope.search = response.data.results;

        }, function myError(response) {
            $scope.search = response.statusText;
        });
    };
});


app.controller("person", function ($scope, $routeParams, $http) {
    $scope.id = $routeParams.id;

    $http({
        method: "GET",
        url: 'https://api.themoviedb.org/3/person/' + $scope.id + '?api_key=a4942ba2bb35ba2f7205bedb5a8989bc'
    }).then(function mySuccess(response) {
        $scope.person = response.data;

        document.getElementById("stars").innerHTML = getStars($scope.person.popularity);
        function getStars(rating) {
            // Round to nearest half
            rating = Math.round(rating *2) / 10;
            let output = [];
            // Append all the filled whole stars
            for (var i = rating; i >= 1; i--)
                output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');
            // // If there is a half a star, append it
            if (i === .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');
            // Fill the empty stars
            for (var i = (5 - rating); i >= 1; i--)
                output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');
            return output.join('');
        }


    }, function myError(response) {
        $scope.person = response.statusText;
    });
    $http({
        method: "GET",
        url: 'https://api.themoviedb.org/3/person/' + $scope.id + '/external_ids?api_key=a4942ba2bb35ba2f7205bedb5a8989bc'
    }).then(function mySuccess(response) {
        $scope.ext_id = response.data.imdb_id;
    }, function myError(response) {
        $scope.ext_id = response.statusText;
    });

    $http({
        method: "GET",
        url: 'https://api.themoviedb.org/3/person/' +$scope.id+ '/movie_credits?api_key=a4942ba2bb35ba2f7205bedb5a8989bc'
    }).then(function mySuccess(response) {
        $scope.credits = response.data.cast;
    }, function myError(response) {
        $scope.credits = response.statusText;
    });
});
