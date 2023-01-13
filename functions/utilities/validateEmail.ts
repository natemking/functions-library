export const validateEmail = (email: string) =>
    // recipient name - cannot start w/ special char, max 64 chars
    // domain name - no special chars except for _-. , max 253 chars
    // top level domain - no special chars except for _-. , cannot end in special chars, max 4 chars
    /^[A-Za-z0-9][\w-\\.!#$%&'*+-/=?^`{|]{0,64}@([\w-]{1,253}\.)+[\w-]{2,4}$/gi.test(email)
    && 
    // check to make sure no special chars repeat twice in a row
    !/([-\\.!#$%&'*+-/=?^`{|])\1{1,}/gi.test(email);