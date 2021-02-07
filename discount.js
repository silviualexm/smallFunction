const totalDiscounted = (discount, total) => { 
    console.log(total - (discount * total) / 100)
}

totalDiscounted(20, 100)