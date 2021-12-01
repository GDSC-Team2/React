package com.toyproject.book.springboot.web;

import com.toyproject.book.springboot.service.posts.PostsService;
import com.toyproject.book.springboot.web.dto.PostsResponseDto;
import com.toyproject.book.springboot.web.dto.PostsSaveRequestDto;
import com.toyproject.book.springboot.web.dto.PostsUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

// API를 요청받는 컨트롤러로 요청을 받는 영역
@RequiredArgsConstructor
@RestController
public class PostsApiController {

    private final PostsService postsService;

    @GetMapping("/home")  // 스프링부트 리액트 연동 테스트
    public String getHome() {
        return "Hello World!";
    }

    @PostMapping("/api/v1/posts")  // 등록 API
    public Long save(@RequestBody PostsSaveRequestDto requestDto) {
        return postsService.save(requestDto);
    }

    @GetMapping("/api/v1/posts/{id}")  // 조회 API
    public PostsResponseDto findById (@PathVariable Long id) {
        return postsService.findById(id);
    }

    @PutMapping("/api/v1/posts/{id}")   // 수정 API
    public Long update(@PathVariable Long id, @RequestBody PostsUpdateRequestDto requestDto){
        return postsService.update(id, requestDto);
    }

    @DeleteMapping("/api/v1/posts/{id}")   // 삭제 API
    public Long delete(@PathVariable Long id){
        postsService.delete(id);
        return id;
    }
}
