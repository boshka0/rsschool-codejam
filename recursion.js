function breadthFirstRecursive(tree = {}, queue = null, acc = []){
    if(tree === null || !tree.value) return;
    if(!queue) {
        queue = [tree];
        acc.push(queue.map(item=>item.value));
    }
    if (queue.length === 0) return acc;
    const newQueue = [].concat(...queue.map(item=>{
        return [item.left, item.right].filter(item=>item);
    }))
    if(newQueue.length) acc.push(newQueue.map(item=>item.value));
    return breadthFirstRecursive(tree, newQueue, acc);
}