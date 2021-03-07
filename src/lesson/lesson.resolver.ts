import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";

@Resolver(of => LessonType)
export class LessonResolver{

    constructor(
        private lessonservice: LessonService
    ){}

    @Query(returns => LessonType)
    lesson(
        @Args('id') id: string
    ){

        return this.lessonservice.getLesson(id);
        // return{
        //     id: 'aaadadadadd',
        //     name: 'Physics Class',
        //     startDate: (new Date()).toISOString(),
        //     endDate: (new Date()).toISOString()
        // }
    }

    @Mutation(returns => LessonType)
    createLesson(
        @Args('name') name: string,
        @Args('startDate') startDate: string,
        @Args('endDate') endDate: string
    ){
        return this.lessonservice.createLesson(name, startDate, endDate);
    }
}