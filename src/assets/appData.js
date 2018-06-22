import dr from './imgs/dr.svg';
import pills from './imgs/pills.svg';
import bills from './imgs/bills.svg';
import family from './imgs/family.svg';
import other from './imgs/other.svg';

export const appData = {
    'welcome': 'Welcome, Ray! How can we help you?',
    'default': {
        'title': 'We\'re here to help.',
        'message': 'Quickly get help with any of the services on the left-hand side.'
    },
    'options': {
        'doctor': {
            'id': 'doctor',
            'img': dr,
            'title': 'Find a Doctor',
            'desc': 'JOANY can help you find a doctor that is covered under your plan.',
            'greeting': 'Hello Ray'
        },
        'prescription': {
            'id': 'prescription',
            'img': pills,
            'title': 'Prescription',
            'desc': 'Need to find a plan that covers your meds? We can also fetch pricing of meds on any health plan.',
            'greeting': 'Stop paying too much for your prescriptions.'
        },
        'bills': {
            'id': 'bills',
            'img': bills,
            'title': 'Help with a bill',
            'desc': 'If you have questions about a suprise bill or want to contest it, send us a photo of it and we\'ll take care of it.',
            'greeting': 'Need help for a bill? Send us a photo and we\'ll help you.'
        },
        'family': {
            'id': 'family',
            'img': family,
            'title': 'Add a family member',
            'desc': 'Add a family member to your health plan.',
            'greeting': 'Have a new addition to your family? We got you covered.'
        },
        'other': {
            'id': 'other',
            'img': other,
            'title': 'Ask us anything',
            'desc': 'What else can we help you with? We\'re ready to help!',
            'greeting': 'Let us know how else we can help you.'
        }
    }
}