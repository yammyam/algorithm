const solution = (angle) => {
    if(angle > 0 && angle < 90)
        return 1;
    else if(angle === 90)
        return 2;
    else if(angle > 90 && angle < 180)
        return 3;
    else if(angle === 180)
        return 4;
}
//switch case문에서 case에 조건식을 못넣음