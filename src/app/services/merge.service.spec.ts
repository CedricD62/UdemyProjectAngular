import { TestBed } from '@angular/core/testing';
import { MergeService } from './merge.service';

const mockMovies = [
  {
    "id": "2",
    "title": "Joker",
    "director": "3"
  },
  {
    "id": "3",
    "title": "Black Panther",
    "director": "2"
  },
  {
    "id": "C2X3-fJ",
    "title": "Kong",
    "director": "1"
  }
];

const mockDirectors = [
  {
    "id": "1",
    "name": "Phil Jackson",
    "movies": [
      "C2X3-fJ"
    ]
  },
  {
    "id": "2",
    "name": "Ryan Coogler",
    "movies": [
      "3"
    ]
  },
  {
    "id": "3",
    "name": "Todd Phillips",
    "movies": [
      "2"
    ]
  }
];



fdescribe('MergeService', () => {
  let service: MergeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MergeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('findDirectorByMovie', ()=>{
    const expected = service.findDirectorByMovie(mockMovies,mockDirectors);
    const result = [
      {
        "id": "2",
        "title": "Joker",
        "director": "Todd Phillips"
      },
      {
        "id": "3",
        "title": "Black Panther",
        "director": "Ryan Coogler"
      },
      {
        "id": "C2X3-fJ",
        "title": "Kong",
        "director": "Phil Jackson"
      }
    ];
    expect(expected).toEqual(result);
  });

  it('findMoviesByDirector', ()=>{
        const expected = service.findMoviesByDirector(mockMovies,mockDirectors);
    const result = [
      {
        "id": "2",
        "name": "Todd Phillips",
        "movies": ["Joker"],
      },
      {
        "id": "3",
        "name": "Ryan Coogler",
        "movies": ["Black Panther"]
      },
      {
        "id": "C2X3-fJ",
        "name": "Phil Jackson",
        "movies": ["Kong"]
      }
    ];
    expect(expected).toEqual(result);
  });
});
