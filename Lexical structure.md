# Lexical structure
Keywords: 組み込み型(int), 制御構文(if, else, while, for), return
Identifiers: variable name, function name. 文頭は英字およびアンダーバー、文中は英数字とアンダーバーが使える
Literals: integar
Punctuation: operator arithmetic +-*/ compare == != <= => < > asign = function(parameters) block {} statement ; pointer * dereference &

function definition:
    type function_name '(' some parameters separated by comma ')' '{' some statements '}'
type:
    type_name some '*'s
parameter:
    type parameter_name
statement: 
    an expression ';'
    "return" an expression ';'
    type variable_name ';'
    "if" '(' an expression ')' a statement
    "if" '(' an expression ')' a statement "else" a statement
    "while" '(' an expression ')' a statement
    "for" '(' [an expression] ';' [an expression] ';' [an expression] ')' a statement
    '{' statements '}'
expression:
    an assignment
assignment:
    an equality ('=' an assignment)
equality:
    a relation ("==" a relation)
    a relation ("!=" a relation)
relation:
    an addtion ('>' an addtion)
    an addtion ('<' an addtion)
    an addtion ('>=' an addtion)
    an addtion ('<=' an addtion)
addtion:
    a multiplier ('+' a multiplier)
    a multiplier ('-' a multiplier)
multiplier:
    an unary ('*' an unary)
    an unary ('/' an unary)
unary:
    ('+' or '-') a primary
    ('*' or '&') an unary
primary:
    '(' an expression ')'
    function_name '(' a parameter, a parameter, ... ')'
    variable_name
    a literal