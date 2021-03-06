const Emojis = [
    { from: ':)', to: '๐' },
    { from: ':-)', to: '๐' },
    { from: ':]', to: '๐' },
    { from: ';)', to: '๐' },
    { from: ';-)', to: '๐' },
    { from: ':D', to: '๐' },
    { from: ':-D', to: '๐' },
    { from: ';P', to: '๐คช' },
    { from: ';-P', to: '๐คช' },
    { from: ':P', to: '๐' },
    { from: ':-P', to: '๐' },
    { from: '8-)', to: '๐' },
    { from: ':|', to: '๐' },
    { from: ':-|', to: '๐' },
    { from: ':(', to: '๐' },
    { from: ':-(', to: '๐' },
    { from: 'o_O', to: '๐ฅด' },
    { from: 'o.O', to: '๐ฅด' },
    { from: ':/', to: '๐' },
    { from: ':-/', to: '๐' },
    { from: ':O', to: '๐ฎ' },
    { from: ':-O', to: '๐ฎ' },
    { from: 'O_O', to: '๐ณ' },
    { from: 'O.O', to: '๐ณ' },
    { from: 'o_o', to: '๐' },
    { from: '#)', to: '๐ค' },
    { from: '#-)', to: '๐ค' },
    { from: '^.^', to: '๐ค' },
    { from: '^_^', to: '๐ค' },
    { from: '^^', to: '๐ค' },
    { from: ':-x', to: '๐' },
    { from: ':*', to: '๐' },
    { from: ':-*', to: '๐' },
    { from: '#(', to: '๐ญ' },
    { from: '#-(', to: '๐ญ' },
    { from: 'm-)', to: '๐คฆโ' },
    { from: ':`(', to: '๐ข' },
    { from: ':`-(', to: '๐ข' },
];

function autoformatExtra() {
    return [
        ...Emojis,
        { from: ',,', to: 'โ' },

        // You can also define patterns using regular expressions.
        // Note: The pattern must end with `$` and all its fragments must be wrapped
        // with capturing groups.
        // The following rule replaces ` "foo"` with ` ยซfooยป`.
        {
            from: /(^|\s)(")([^"]*)(")$/,
            to: [ null, 'โ', null, 'โ' ]
        },
        {
            from: /(\. )([a-z])$/,
            to: matches => [ null, matches[ 1 ].toUpperCase() ]
        }
    ]
}

export default autoformatExtra;
