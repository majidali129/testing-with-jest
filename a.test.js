
// const add = (a, b) => a + b;
// test('Added 1+4 equal to 5', () => {
//     expect(add(1,4)).toBe(5)
// })

// const data = {name: 'Majid', age: 23, DOB: '02-10-2001'}

// test('It should have name age DOB', () => {
//     data['class'] = 'CS'
//     expect(data).toEqual({name: "Majid", age: 23, DOB: '02-10-2001', class: 'CS'})
//  })
/**
 *! For Equality
 */
// test('adding positive numbers is not zero', () => {
//     for (let a = 1; a < 10; a++) {
//       for (let b = 1; b < 10; b++) {
//         expect(a + b).not.toBe(0);
//       }
//     }
//   });

/**
 *! For Truthy | Falsy
 */

//  test('null', () => {
//     const n = null;
//     expect(n).toBeNull();
//     expect(n).toBeDefined();
//     expect(n).not.toBeUndefined();
//     expect(n).not.toBeTruthy();
//     expect(n).toBeFalsy();
//   });

//   test('Zero', () => {
//      const a = 0
//      expect(a).not.toBeNull()
//      expect(a).toBeDefined()
//      expect(a).not.toBeUndefined()
//      expect(a).toBeFalsy()
//      expect(a).not.toBeTruthy()
//   })
//  test('Undefined', () => {
//     const a = undefined;
//     expect(a).not.toBeNull()
//     expect(a).not.toBeDefined()
//     expect(a).toBeUndefined()
//     expect(a).toBeFalsy()
//     expect(a).not.toBeTruthy()
//  })


/**
 *! For Numbers
*/

// test('2 Plus 2', () => {
//     const n = 2 + 2;
//     expect(n).toBeGreaterThan(3);
//     expect(n).toBeLessThan(5);
//     expect(n).toBe(4);
//     expect(n).toEqual(4)
//     expect(n).toBeLessThanOrEqual(4.2)
//     expect(n).toBeGreaterThanOrEqual(3.8)
// })

/**
 *! For Strings
*/
// test('Check for I in name', () => {
//     expect("Majid").toMatch(/I/i)
// })

// test('Check for engineer in name', () => {
//     expect("He is a frontend engineer").toMatch(/engineer/)
// })

/**
 *! For Arrays & Iterables
*/

// test('If skill set have typescript or not', () => {
//     const skillSet = ['html', 'css', 'js', 'typescript', 'react'];
//     expect(skillSet).toContain('typescript')
// })
// test('If skill set have react or not', () => {
//     const skillSet = ['html', 'css', 'js', 'typescript', 'react', 'react'];
//     expect(new Set(skillSet)).toContain('react')
// })

/**
 *! For Exceptions
*/

// test('If func throw error', () => {
//     const compileAndroidCode = () => {
//         throw new Error('you are using the wrong JDK!');
//     }

//     expect(() =>compileAndroidCode()).toThrow()
//     expect(() =>compileAndroidCode()).toThrow(Error)
//     expect(() =>compileAndroidCode()).toThrow('you are using the wrong JDK!')
//     expect(() => compileAndroidCode()).toThrow(/JDK/)
//     expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/)  // test will pass
//     expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/) // test will fail
// })