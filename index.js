exports.default = function (babel) {
    const { types: t } = babel;

    const transformer = (node) => {
        if (!node) return node;
        if (node.type !== "BinaryExpression") return node;
        if (node.operator !== "in") return node;

        const keys = node.left;
        const object = node.right;
        return t.objectExpression(keys.properties.map(property => {
            return t.objectProperty(property.value, t.memberExpression(object, property.value));
        }));
    };

    return {
        visitor: {
            ExpressionStatement(path) {
                path.node.expression.right = transformer(path.node.expression.right);
            },
            VariableDeclarator(path) {
                path.node.init = transformer(path.node.init);
            }
        }
    };
}
