// union type = soort OR
// intersection type = soort AND

function richting(value: string | number): void {
  if (typeof value === 'string') {
    // typeguard die narrowt van string | number naar string
    console.log(`naar het ${value}`);
  } else {
    console.log(value + 10);
  }
}

richting(13);
richting('noord');

// ----------------------------------------------------------------------

// discriminated union AKA tagged union type
// = union types met specifieke tag

// 👇 dit wordt een type alias genoemd
type LoadingState = {
  state: 'loading';
};

type FailedState = {
  state: 'failed';
  status: number;
};

type SuccessState = {
  state: 'success';
  response: {
    isLoaded: boolean;
  };
};

type MyState = LoadingState | FailedState | SuccessState;

function request(state: MyState): string {
  switch (state.state) {
    case 'loading':
      return 'Uploading...';
    case 'failed':
      return `Error, status number: ${state.status}.`;
    case 'success':
      return `Is uploaded to BD? ${state.response.isLoaded}`;
  }
}

const myState: MyState = {
  state: 'loading',
};

// intersection type

interface Medewerker {
  name: string;
  city: string;
}

interface Manager {
  nrOfDirectRepors: number;
}

interface Trainer {
  courses: string[];
}

type ManagerIntern = Medewerker & Manager;
type TrainerIntern = Medewerker & Trainer;

const JP: TrainerIntern = {
  name: 'JP',
  city: 'Ede',
  courses: ['a', 'b', 'c'],
};

// ----------------------------------------------------------------------

// Veel voorkomende fout

interface WhatsApp {
  message: string;
}

interface Phone {
  text: string;
}

// function info(obj: WhatsApp | Phone): string {
//   if ('message' in obj) {      // dit is geen type guard (een type guard gebruikt bijv. keyof, instanceof, "prop" in obj, Array.isArray())
//     return obj.message;
//   }
//   return obj.text;
// }

function info(obj: WhatsApp | Phone): string {
  if (heeftMessage(obj)) {      // dit is geen type guard (een type guard gebruikt bijv. keyof, instanceof, "prop" in obj)
    return obj.message;
  }
  return obj.text;
}

// Type Predicate
function heeftMessage(obj: WhatsApp | Phone): obj is WhatsApp {
  return ('message' in obj);
}

// ----------------------------------------------------------------------