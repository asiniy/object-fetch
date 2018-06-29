class ObjectHasNoPropertyError extends Error {}

interface PassedObject {
  readonly [key: string]: any;
}

const objectFetch = (obj: PassedObject, property: string): any => {
  // tslint:disable-next-line:no-if-statement
  if (obj.hasOwnProperty(property)) {
    return obj[property];
  }

  throw new ObjectHasNoPropertyError(`No such property: ${property}`);
};

export default objectFetch;
