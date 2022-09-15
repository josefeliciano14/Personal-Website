

const topicStatus = {
    'high-school': false, 
    'uprm-mech': false, 
    'aiaa': false, 
    'johnson': false, 
    'grad-mech': false, 
    'uprm-software': false, 
    'home-depot': false, 
    'ogpe': false, 
    'honeywell-intern': false, 
    'grad-software': false, 
    'future': false
};

const topics = new Array('high-school', 'uprm-mech', 'aiaa', 'johnson', 'grad-mech', 'uprm-software', 'home-depot', 'ogpe', 'honeywell-intern', 'grad-software', 'future');

function toggleSection(topic){
    let tl = gsap.timeline();

    if(topicStatus[topic] == false){
        let calcHeight = document.getElementById(topic + '-info').offsetHeight;
        
        tl.to('#' + topic + '-info-container', {height: calcHeight, opacity: 1, duration: 0.5});
        tl.from('#' + topic + '-info', {opacity: 0, duration: 0.5});

        topicStatus[topic] = true;
    }
    else{
        tl.to('#' + topic + '-info', {opacity: 0, duration: 0.25});
        tl.to('#' + topic + '-info-container', {height: 0, opacity: 0, duration: 0.5});
        tl.to('#' + topic + '-info', {opacity: 1, duration: 0});

        topicStatus[topic] = false;
    }
}

//set up event listeners 
for(let i=0; i<topics.length; i++){
    document.getElementById(topics[i]).addEventListener("click", () => toggleSection(topics[i]));
}

let tl = gsap.timeline();

tl.to('#instruction', {fontSize: 20, duration: 2.5, ease: "elastic.out(2, 0.3)", autoRound:false});