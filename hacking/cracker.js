function(c,a){ //t:#s.user.loc
  let cn = #db.f({ _id:'cn'}).first(),
  p = {digit:0,ez_prime:cn.p[0],DATA_CHECK:""},l,o,cl,r,cp
  function DC(line){
	let args = {}; args.lookup = line;
	return #fs.lore.data_check(args).answer}
  for(;;){
    o = a.t.call(p)
    if (cp = /`N(EZ_..)`/.exec(o)){       // first regex cap: treats EZ_** unlock commands
      l = cp[1]; p[l] = cn.u[0]
	  } else if(cp = /`N(c00.)`/.exec(o)){  // second regex cap: treats c00* color names
		  l = cp[1]; p[l] = cn.cl[0]
	  } else if(cp = /`N(l0cket)`/.exec(o)){  // third regex cap: treats c00* color names
		  l = cp[1]; p[l] = cn.lc[0]
	  } else if(o.includes("++++++")){
		  let O = o.split('\n')
		  for (let i = 0; i < O.length; i++)
			  p.DATA_CHECK += DC(O[i])
	  } else if(/k3y/.test(o)){
		  let i = cn.lc.indexOf(p[l]); p[l] = cn.lc[i + 1]
	  } else if(o.includes("`Ncolor_digit`")){
		  p.color_digit = p[l].length
	  } else if(o.includes("`Nc002_complement`")){
		  let i = cn.cl.indexOf(p[l]); p.c002_complement = cn.cl[(i + 4) % 8]
	  } else if(o.includes("`Nc003_triad_1")){
		  let i = cn.cl.indexOf(p[l]); p.c003_triad_1 = cn.cl[(i + 5) % 8]
		  p.c003_triad_2 = cn.cl[(i + 3) % 8]
	  } else if(/color name/.test(o)) {
		  let i = cn.cl.indexOf(p[l]); p[l] = cn.cl[i + 1]
    } else if (/command/.test(o)) {
      let i = cn.u.indexOf(p[l]); p[l] = cn.u[i + 1]
    } else if (o.includes('not the correct digit')){
      p.digit += 1
	  } else if (o.includes('not the correct prime')){
	    let i = cn.p.indexOf(p.ez_prime); p.ez_prime = cn.p[i + 1]
    } else {
		  return o + '\n\n' + JSON.stringify(p)
	  }
  }
}
