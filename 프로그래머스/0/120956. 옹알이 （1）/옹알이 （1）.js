const solution = (babbling) => {
    //조건을 잘보기
    //두번이상안나오고, 전체적으로 다 해당되어야 발음가능한 단어, 
  const reg = /^(aya|ye|woo|ma)+$/;
  return babbling.filter(word => reg.test(word)).length;
}