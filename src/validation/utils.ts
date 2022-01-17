
export const isString = (text:unknown): text is string =>{
    return typeof text === 'string' || text instanceof String;
};

export const isDate = (date:string):boolean =>{
    return Boolean(Date.parse(date));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseDate = (date:any, messageError:string):string =>{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if(!date || !isString(date) || !isDate(date)){
        throw new Error(messageError);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return date;
};
export const parseString = (text:unknown, messageError:string) :string =>{
    if(!text || !isString(text)){
        throw new Error(messageError);
    }
    return text;
};

export const parseArrayString = (codes:unknown, messageError:string):Array<string> =>{
    if(!codes || !Array.isArray(codes)){
        throw new Error(messageError);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return codes;
};
export const parseInt = (value:unknown, messageError:string) :number =>{
    if(!value || !Number.isInteger(value)){
        throw new Error(messageError);
    }
    return value as number;
};
