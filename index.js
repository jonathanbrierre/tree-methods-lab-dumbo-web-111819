let inOrder = currentNode => {
    if(currentNode.left){
        inOrder(currentNode.left)
    }
    console.log(currentNode.data)

    if(currentNode.right){
        inOrder(currentNode.right)
    }
}

// let findOrAdd = (currentNode, newNode) => {
//     if(currentNode.data === newNode.data){
//         return true
//     }

//     if(currentNode.data === null){
//         return currentNode = newNode
//     }

//     if(currentNode.data > newNode.data){
//         return findOrAdd(currentNode.left, newNode)
//     }

//     if(currentNode.data < newNode.data){
//         return findOrAdd(currentNode.right, newNode)
//     }

// }

function findOrAdd(currentNode, newNode){
    if(currentNode.data == newNode.data){
      return true
    }
    if(newNode.data < currentNode.data){
      if(currentNode.left){
        return findOrAdd(currentNode.left, newNode)
      } else {
        return currentNode.left = newNode
      }
    }
  
    if(newNode.data > currentNode.data){
      if(currentNode.right){
        return findOrAdd(currentNode.right, newNode)
      } else {
        return currentNode.right = newNode
      }
    }
  }

function max(currentNode){
    if(currentNode.right){
        return max(currentNode.right)
    }
    return currentNode
}

function min(currentNode){
    if(currentNode.left){
        return min(currentNode.left)
    }
    return currentNode
}